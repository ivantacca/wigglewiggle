# wigglewiggle
A wigglegram creation cli module based on ffmpeg.

## Installation
```
cd wigglewiggle
npm i 
npm i -g
```
## Usage
Create a new directory with ```1.jpg``` and ```2.jpg```
```
wiggle make ./path/to/folder/with/1_and_2_jpg/
```
Or with multiple directories
```
wiggle make ./path/to/folder/with/subfolders/with/1_and_2_jpg/ --all
```
Set root directory as output
```
wiggle make ./path/to/folder/with/subfolders/with/1_and_2_jpg/ --all --root
```
