# k8x

## 1.0.2

### Patch Changes

- BUGFIX: we actuall needed 2 commands. One is use-context to switch between contexts, and set-context, to set the default namespace.

## 1.0.1

### Patch Changes

- Should filter out the 'default' namespace when it's the current namespace.
- Since a context may have different namespaces, and we're allowing choosing a namespace now, we no longer filter out the selected context from the list.
- getAllContexts is no longer os based. Now using a pure k8x command.

## 1.0.0

### Major Changes

- Major release. k8x is production ready.

## 0.1.0

### Minor Changes

- You can now use the tool to set a default namespace. 'default' will always appear as the first option.

### Patch Changes

- small - export is now in front of the function keyword

## 0.0.10

### Patch Changes

- do not fail when exiting the cli tool

## 0.0.9

### Patch Changes

- title color is now yellow
- no more looping around

## 0.0.8

### Patch Changes

- context name can now contain special characters

## 0.0.7

### Patch Changes

- k8x is now a cross-platform CLI tool

## 0.0.6

### Patch Changes

- 06adc70: added the link to the repository

## 0.0.5

### Patch Changes

- 139f742: added more keywords

## 0.0.4

### Patch Changes

- f54daa5: updated the readme file

## 0.0.3

### Patch Changes

- 4c6984a: fixed the awk script

## 0.0.2

### Patch Changes

- dcea63c: bin is just a string

## 0.0.1

### Patch Changes

- 464634b: now as executable

## 1.0.2

### Patch Changes

- 3f85e03: first publish
