import PocketBase from 'pocketbase';

// Initialize PocketBase instance
export const pb = new PocketBase('POCKETBASE_URL');

// Authenticate the PocketBase instance
(async () => {
  try {
    await pb.collection('_superusers').authWithPassword(
      'PLACEHOLDER','PLACEHOLDER'
    );
    console.log('Successfully authenticated as superuser.');
  } catch (error) {
    console.error('Authentication failed:', error);
  }
})();

// Blog Service for interacting with PocketBase
export const blogService = {
  // Fetch paginated posts with optional search and tag filters
  async getPosts(page = 1, limit = 6, searchTerm = '', tagId: string | undefined) {
    try {
      let filter = '';

      // Add search filter
      if (searchTerm) {
        filter += `(Title ~ "${searchTerm}" || Content ~ "${searchTerm}")`;
      }

      // Add tag filter using relation
      if (tagId) {
        filter += filter
          ? ` && Tags.id ?= "${tagId}"`
          : `Tags.id ?= "${tagId}"`;
      }

      const result = await pb.collection('Posts').getList(page, limit, {
        filter,
        sort: '-Created_at', // Sort by most recent posts
        expand: 'Tags,Author', // Expand relations
      });

      // Map posts into a structured format
      return {
        posts: result.items.map((item) => ({
          id: item.id,
          title: item.Title,
          // Create a basic excerpt from the content remove the HTML tags
		  excerpt: item.Content
			? item.Content.replace(/<[^>]+>/g, '').substring(0, 200)
			: '',
				

          content: item.Content || '',
          author: item.expand?.Author?.name || 'Anonymous',
          date: new Date(item.Created_at).toLocaleDateString(),
          tags: item.expand?.Tags?.map((tag: { id: any; Name: any; }) => ({
            id: tag.id,
            name: tag.Name,
          })) || [],
          imageUrl: item.Photo
            ? `${pb.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.Photo}`
            : undefined,
        })),
        totalPosts: result.totalItems,
        currentPage: result.page,
        totalPages: Math.ceil(result.totalItems / result.perPage),
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts. Please try again later.');
    }
  },

  // Fetch a single post by ID
  async getPost(id: string) {
    try {
      const record = await pb.collection('Posts').getOne(id, {
        expand: 'Tags'
      });

      return {
        id: record.id,
        title: record.Title,
        content: record.Content || '',
        author: record.expand?.Author?.name || 'Anonymous',
        date: new Date(record.Created_at).toLocaleDateString(),
        tags: record.expand?.Tags?.map((tag: { id: any; Name: any; }) => ({
          id: tag.id,
          name: tag.Name,
        })) || [],
        imageUrl: record.Photo
          ? `${pb.baseUrl}/api/files/${record.collectionId}/${record.id}/${record.Photo}`
          : undefined,
      };
    } catch (error) {
      console.error('Error fetching post:', error);
      throw new Error('Failed to fetch the post. Please try again later.');
    }
  },

  // Fetch all available tags
  async getTags() {
    try {
      const records = await pb.collection('Tags').getFullList({
        sort: 'Name',
      });

	  console.log(records);

      return records.map((tag) => ({
        id: tag.id,
        name: tag.Name,
      }));
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw new Error('Failed to fetch tags. Please try again later.');
    }
  },
};
