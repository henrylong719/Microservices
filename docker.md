### Docker basic commands



*Build an image based on the docker file in the current directory. Tag it as 'henry long/posts'*

```bash
docker build -t henrylong/posts .
```



*Create and start a container based on the provided image id or tag*

```bash
docker run [image id or image tag]
```



*Create and start container, but also override the default command*

```bash
docker run -it [image id or image tag] [cmd]

# docker run -it henrylong/posts sh
```



*Print out information about all of the running containers*

```bash
docker ps
```



*Execute the given command in a running container*

```bash
docker exec -it [container id] [cmd]
```



*Print out logs from the given container*

```bash
docker logs [container id]
```





