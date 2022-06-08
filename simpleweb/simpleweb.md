### Steps



1. Create Node JS web app
2. Create a Dockerfile
3. Build image from dockerfile
4. Run image as container
5. Connect to web app from a browser



**Tag an image**

```bash
 docker build -t henrylong/simpleweb .
```



**Run the image**

```bash
 docker run henrylong/simpleweb
```



**Docker Run with Port Mapping**

```bash
docker run -p 8080:8080 henrylong/simpleweb
```

*The two port do not have to be identical*

```bash
docker run -p 3000:8080 henrylong/simpleweb
```













