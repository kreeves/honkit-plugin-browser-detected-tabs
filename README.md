## honkit-plugin-browser-detected-tabs

### Description
This Honkit plugin provides tabbed browsing navigation with browser detection. It allows you to display content conditionally based on the user's operating system.

### Installation
1. Install the plugin via npm:
    ```sh
    npm install honkit-plugin-browser-detected-tabs
    ```

2. Add the plugin to your `book.json`:
    ```json
    {
        "plugins": ["honkit-plugin-browser-detected-tabs"]
    }
    ```

3. Install the plugins:
    ```sh
    npx honkit install
    ```

### Usage
To use the browser detected tabs in your Honkit book, you can use the custom `{% osContent %}` block tags in your markdown files.

A full example is below which includes the navigation buttons needed by the plug-in.
#### Example
```markdown
<nav id="osNav">
    <a href="#" class="osToggle" data-os="Windows">Windows</a>
    <a href="#" class="osToggle" data-os="Mac">Mac</a>
    <a href="#" class="osToggle" data-os="Linux">Linux</a>
</nav>

{% osContent "Mac" %}
This content is only visible on macOS.
{% endosContent %}

{% osContent "Windows" %}
This content is only visible on Windows.
{% endosContent %}

{% osContent "Linux" %}
This content is only visible on Linux.
{% endosContent %}
```

### License
This project is licensed under the MIT License.