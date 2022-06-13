### Docker



**basic commands**



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



### Kubernetes



Kubernetes is a tool for running a bunch of different containers

We give it some configuration to describe how we want our containers to run and interact with each other.



**Important Kubernetes Terminology**



**Kubernetes Cluster**

A collection of nodes + a master to manage them

**Node**

A virtual machine that will run our containers

**Pod**

More or less a running container. Technically, a pod can run multiple containers.

**Deployment**

Monitors a set of pods, make sure they are running and restarts them if they crash.

**Service**

Provides an easy-to-remember URL to access a running container





**K8s Commands**

Print out information about all of the running pods

```bash
kubectl get pods
```



Execute the given command in a running pod

```bash
kubectl exec -it [pod_name] [cmd]

kubectl exec -it posts sh
```



Print out logs from the given pod

```bash
kubectl logs [pod_name]
```



Deletes the given pod

```bash
kubectl delete pod [pod_name]
```



Tells kubernetes to process the config

```bash
kubectl apply -f [config file name]
```



Print out some information about the running pod

```bash
kubectl describe pod [pad_name]
```



**Deplyment Command**

List all the running deployments

```bash
kubectl get deployments
```



Print out details about a specific deployment

```bash
kubectl describe deployment [depl name]
```



Create a deployment out of a config file

```bash
kubectl apply -f [config file name]
```



Delete a deployment

```bash
kubetrl delete deployment [depl_name]
```





















