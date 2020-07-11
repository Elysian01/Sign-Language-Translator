import os
import re

'''
Function to rename gif files
'''

path = "D:\\IT\\Projects\\Sign-Language-Translator\\static\\ISL_Gifs\\"

files = [0 for i in range(86)]
letters = [chr(letter) for letter in range(97, 123)]
keywords = [0 for i in range(86)]


def rename_gifs():
    for count, filename in enumerate(os.listdir(path)):
        new_filename = filename.replace(" ", "-")
        dst = path + new_filename
        src = path + filename
        os.rename(src, dst)
        print(new_filename)


def get_keywords():
    for count, filename in enumerate(os.listdir(path)):
        index = int(filename.split("-")[0])
        key = str(filename[2:].strip('-').split(".")[0].replace("-", " "))
        keywords[index] = key
    return keywords


def create_dict_of_files():
    for count, filename in enumerate(os.listdir(path)):
        number = filename.split("-")[0]
        files[int(number)] = filename
    return files


if __name__ == '__main__':
    print(get_keywords())
    # print(letters)
    # print(files)
    # print(create_dict_of_files())
    # rename_gifs()
