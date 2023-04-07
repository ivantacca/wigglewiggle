const { path: ffmpegPath } = require('@ffmpeg-installer/ffmpeg')
const { path: ffprobePath } = require('@ffprobe-installer/ffprobe')
const ffmpeg = require('fluent-ffmpeg')
const { logger } = require('./logger')
const path = require('path')

// set paths
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);


module.exports = {
    generate: (dir) => {
        logger('GENERATE', {dir})

        const images = path.join(dir,'%d.jpg')
        const filename = `${path.parse(dir).base}.mp4`
        const output = path.join(dir, filename)

        ffmpeg()
            .videoFilter([
                {
                    filter: 'crop',
                    options: {
                        w: 'in_h*9/16',
                        h: 'in_h',
                        x: '(in_w-ow)/2',
                        y: 0,
                    },
                },
            ])
            .input(images)
            .withFpsInput(4)
            .loop(3)
            .outputOptions('-pix_fmt yuv420p')
            .output(output)
            .run();
            
        logger('GENERATE_SUCCESS', {output: filename})

    }
}

