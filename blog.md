<div class="blog-list">
    {% if site.posts.size == 0 %}
        <div class="box">
            <p class="cmd">> Error: No active logs found in _posts/ repository directory.</p>
        </div>
    {% else %}
        {% for post in site.posts %}
            <article class="box blog-post-card">
                <div class="project-header">
                    <h3><a href="{{ post.url | relative_url }}" class="blog-title-link">{{ post.title }}</a></h3>
                    <span class="blog-date">[{{ post.date | date: "%Y-%m-%d" }}]</span>
                </div>
                <p class="cmd">> Entry status: Active</p>
                <p class="blog-preview">
                    {{ post.excerpt | strip_html | truncatewords: 25 }}
                </p>
                <a href="{{ post.url | relative_url }}" class="read-more-btn">[ Read Entry ]</a>
            </article>
        {% endfor %}
    {% endif %}
</div>