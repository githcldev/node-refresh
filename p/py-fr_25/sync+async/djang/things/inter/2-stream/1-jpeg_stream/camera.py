from time import time
class Camera(object):
    """An emulated camera implementation that streams a repeated sequence of
    files 1.jpg, 2.jpg and 3.jpg at a rate of one frame per second."""

    def __init__(self):
        self.frames = [open('./static_assets/' + f + '.jpg', 'rb').read() for f in ['1', '2', '3']]

    def get_frame(self):
        # print(time())
        # print(int(time()) % 3)
        return self.frames[int(time()) % 3]

