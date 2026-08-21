// Sample articles data
const articles = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        date: "August 15, 2024",
        summary: "Learn the basics of HTML, CSS, and JavaScript. This comprehensive guide covers everything you need to know to start your web development journey.",
        content: "Full article content about web development..."
    },
    {
        id: 2,
        title: "Understanding REST APIs",
        date: "August 10, 2024",
        summary: "Explore the principles of REST architecture and learn how to build scalable APIs that follow REST conventions and best practices.",
        content: "Full article content about REST APIs..."
    },
    {
        id: 3,
        title: "JavaScript ES6 Features You Should Know",
        date: "August 5, 2024",
        summary: "Discover the modern JavaScript features introduced in ES6 that can make your code cleaner, more efficient, and easier to maintain.",
        content: "Full article content about ES6 features..."
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox",
        date: "July 30, 2024",
        summary: "Compare CSS Grid and Flexbox layouts. Learn when to use each and how to combine them effectively in your projects.",
        content: "Full article content about CSS Grid vs Flexbox..."
    },
    {
        id: 5,
        title: "Introduction to Version Control with Git",
        date: "July 25, 2024",
        summary: "Master Git basics including repositories, commits, branches, and collaboration. Essential skills for modern developers.",
        content: "Full article content about Git..."
    },
    {
        id: 6,
        title: "Web Performance Optimization",
        date: "July 20, 2024",
        summary: "Learn techniques to improve your website's speed and performance. Discover tools and strategies for optimization.",
        content: "Full article content about web performance..."
    }
];

// Load and display articles on homepage
function loadArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = articles.map(article => `
        <div class="article-card" onclick="viewArticle(${article.id})">
            <div class="article-header">
                <h3>${article.title}</h3>
                <span class="article-date">${article.date}</span>
            </div>
            <div class="article-body">
                <p>${article.summary}</p>
                <a href="#" class="read-more" onclick="event.stopPropagation();">Read More →</a>
            </div>
        </div>
    `).join('');
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(currentPage) || 
            (currentPage === '' && link.href.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

// View article details
function viewArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        alert(`Article: ${article.title}\n\n${article.content}`);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    setActiveNavLink();
});