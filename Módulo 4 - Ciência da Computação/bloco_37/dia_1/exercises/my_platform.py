import platform

my_platform = platform.platform()[:5]
release = platform.release()
architecture = platform.architecture()[0]

print(my_platform)
print(release)
print(architecture)