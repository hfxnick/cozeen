// Blog Posts Loader
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blogGrid');
    
    if (blogGrid) {
        // Fetch posts from JSON
        fetch('posts.json')
            .then(response => response.json())
            .then(posts => {
                // Sort posts by date (newest first)
                posts.sort((a, b) => new Date(b.date) - new Date(a.date));
                
                // Generate blog cards
                blogGrid.innerHTML = posts.map(post => createBlogCard(post)).join('');
            })
            .catch(error => {
                console.error('Error loading blog posts:', error);
                blogGrid.innerHTML = '<p>Unable to load blog posts at this time.</p>';
            });
    }
});

function createBlogCard(post) {
    const formattedDate = formatDate(post.date);
    const imageHTML = post.image 
        ? `<img src="${post.image}" alt="${post.title}" style="width: 100%; height: 200px; object-fit: cover;">` 
        : `<div class="blog-card-image">✨</div>`;
    
    return `
        <article class="blog-card">
            ${imageHTML}
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span class="blog-date">📅 ${formattedDate}</span>
                    <span class="blog-author">✍️ ${post.author}</span>
                </div>
                <h2><a href="posts/${post.slug}.html">${post.title}</a></h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                ${post.tags && post.tags.length > 0 ? `
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
                <a href="posts/${post.slug}.html" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
