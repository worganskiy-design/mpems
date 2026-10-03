# make_icons.py - draws two simple app icons (white circle on blue)
import zlib
import struct

def make_png(size, filename):
    blue = (18, 53, 91)
    white = (255, 255, 255)
    centre = size / 2
    radius = size * 0.32
    rows = b""
    for y in range(size):
        rows += b"\x00"
        for x in range(size):
            inside = (x - centre) ** 2 + (y - centre) ** 2 < radius ** 2
            if inside:
                rows += bytes(white)
            else:
                rows += bytes(blue)

    def chunk(tag, data):
        body = tag + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body))

    header = struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", header)
    png += chunk(b"IDAT", zlib.compress(rows))
    png += chunk(b"IEND", b"")
    open(filename, "wb").write(png)

make_png(192, "icons/icon-192.png")
make_png(512, "icons/icon-512.png")
print("Icons created")