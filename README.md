# rules_js_docker_repro

What I'm trying to do us use rules_docker to create an image that can run the Next.js app. At the terminal I do:

```sh
bazel run //apps/alpha:image
```

To create a docker image and stick in my local machine (so if I run `docker image ls` I'll see it). Then I can run the docker image like:

```sh
docker run bazel/apps/alpha:app_image
```

But I get stuck with this output, and the image hangs:

```sh
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested


Starting js_run_devserver //apps/alpha:next_start
Syncing...
```

The example here was copied from https://github.com/aspect-build/bazel-examples/tree/main/next.js, and the js_image_layer.bzl file came from https://github.com/aspect-build/rules_js/blob/main/e2e/js_image
