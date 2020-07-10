import os
import re

'''
Function to rename gif files
'''

path = "D:\\IT\\Projects\\Sign-Language-Translator\\static\\ISL_Gifs\\"

files = [0 for i in range(86)]
letters = [chr(letter) for letter in range(97, 123)]


def rename_gifs():
    for count, filename in enumerate(os.listdir(path)):
        print(filename)
        print(count)

        dst = path + str(count) + "-" + filename
        src = path + filename
        os.rename(src, dst)


def create_dict_of_files():
    for count, filename in enumerate(os.listdir(path)):
        number = filename.split("-")[0]
        files[int(number)] = filename
    return files


if __name__ == '__main__':
    print(letters)
    #     print(files)
    #     print(create_dict_of_files())
    #     rename_gifs()
