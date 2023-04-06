import { path as ffmpegPath } from '@ffmpeg-installer/ffmpeg';
import { path as ffprobePath } from '@ffprobe-installer/ffprobe';
import ffmpeg from 'fluent-ffmpeg';

// set paths
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

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
   .input('./test/images/%d.jpg')
   .withFpsInput(4)
   .loop(3)
   .outputOptions('-pix_fmt yuv420p')
   .output('./test/output.mp4')
   .run();