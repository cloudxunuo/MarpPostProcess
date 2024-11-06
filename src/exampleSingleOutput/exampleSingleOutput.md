---
marp: true
theme: default
paginate: true
class: invert
style: |
  section h4 {
    text-align: left;
    font-size: 22px;
    color: #cee7ff;
    font-weight: bold;
    font-style: italic;
  }

  section h2 {
    text-align: left;
    font-size: 32px;
    color: #bee7ff;
    font-weight: bold;
  }

  section ul li {
    text-align: left;
    font-size: 28px;
    color: #dddddd;
    font-weight: 600;
  }

  section ul li ul li {
    text-align: left;
    font-size: 24px;
    color: #aaaaaa;
    font-weight: 500;
  }

  section ul li ul li ul li {
    text-align: left;
    font-size: 24px;
    color: #999999;
    font-weight: 400;
  }
---

# Expample for single output
## Marp with post process
### if no videos found, the default `build.js` will generate a single html file

---
#### Slide Title

## Support Image Modal:
- Click Image, Open the Modal
    - style1
        - style2
![h:100](image.png)
- Use `HTML img`
<img style="width:auto;height: 100px;" src="image.png" />
