from pathlib import Path

frontmatter = """---
name: {}
section: {}
title: {}
---
"""

if __name__ == "__main__":
    folder = Path("./hymns")
    for file in folder.glob("**/*.txt"):
        with open(file, "r") as c:
            content = c.read().strip("\n")
        num = file.with_suffix("").name
        section = file.parent.name
        title = content.split("\n", 1)[0]
        mdx_content = frontmatter.format(num, section, title) + content
        target = folder / file.with_suffix(".mdx").name
        with open(target, "w") as t:
            t.write(mdx_content)