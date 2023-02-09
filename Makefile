
test:
	bazel test //... --test_tag_filters=jest

lint:
	bazel test //... --test_tag_filters=lint

build:
	bazel build //...

.PHONY: test lint build

ci: lint build test
