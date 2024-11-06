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

# Expample
## Marp with post process
### target HTML slide deck

---
#### Slide Title

## Support Image Modal:
- Click Image, Open the Modal
    - style1
        - style2
![h:100](image.png)
- Use `HTML img`
<img style="width:auto;height: 100px;" src="image.png" />


---
#### Slide Title

## Video:
- Support Videos
    - Use `HTML DIV`
<div style="display: flex;">
    <div>
        <video src="video1.mp4" width="320" height="240" controls></video>
        <p style="text-align: center; font-size: 20px;">video1</p>
    </div>
    <div style="margin-left:30px">
        <video src="video2.mp4" width="320" height="240" controls></video>
        <p style="text-align: center; font-size: 20px;">video2</p>
    </div>
</div>
