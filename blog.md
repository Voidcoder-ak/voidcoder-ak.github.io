---
layout: default
title: "Voidcoder | Blog"
permalink: /blog/
---

<main class="grid-container">
    
    <aside class="left-profile-card">
        <div class="avatar-box">
            <img src="{{ site.baseurl }}/avatar.jpg" alt="voidcoder-ak avatar" class="avatar">
        </div>
        <div class="profile-info">
            <h1 class="profile-name">voidcoder-ak</h1>
            <p class="profile-title">Software Developer // Robotist</p>
        </div>

        <h2>// CONSOLE</h2>
        <div class="box profile-meta">
            <p>> viewing: /blog</p>
            <p>> status: steady_state</p>
        </div>
        
        <div class="box links-box" style="margin-top: 15px;">
            <a href="{{ site.baseurl }}/">← Back to Main</a>
        </div>
    </aside>

    <section class="center-content" id="blog-archive">
        <h2><span class="prompt">guest@voidcoder:~/blog$</span> ls -lt</h2>
        <p class="subtitle" style="margin-bottom: 20px; opacity: 0.6; font-size: 0.9rem;">Documenting my journey, logic, and debugging.</p>
        
        <div class="blog-list">
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
            {% empty %}
                <div class="box">
                    <p class="cmd">> Error: No active logs found in _posts/ repository directory.</p>
                </div>
            {% endfor %}
        </div>
    </section>

    <aside class="right-status-sidebar">
        <h2>// SYSTEM_TAGS</h2>
        <div class="box skills-box">
            <div class="skill-tag">#cpp</div>
            <div class="skill-tag">#networking</div>
            <div class="skill-tag">#linux</div>
            <div class="skill-tag">#dsa</div>
        </div>
    </aside>

</main>