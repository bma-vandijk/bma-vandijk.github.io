---
title: Research
layout: page
permalink: /research/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="meta">— {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
  {% if site.posts == empty %}
    <li class="meta">Coming soon...</li>
  {% endif %}
</ul>



