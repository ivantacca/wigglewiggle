const { path: ffmpegPath } = require('@ffmpeg-installer/ffmpeg')
const { path: ffprobePath } = require('@ffprobe-installer/ffprobe')
const ffmpeg = require('fluent-ffmpeg')
const { logger } = require('./logger')

// set paths
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);


module.exports = {
    generate: (path) => {
        logger('GENERATE', path)

        const images = path + '/%d.jpg';
        const output = path + '/foldername.mp4'
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
        logger('GENERATE_SUCCESS', path)

    }
}

