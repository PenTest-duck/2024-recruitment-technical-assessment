from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int

"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    # Define set of all parent IDs of files
    parentIDs = set()
    for file in files:
        parentIDs.add(file.parent)

    # Extract the files that are not parents (i.e. leaf files)
    leafFiles = []
    for file in files:
        if file.id not in parentIDs:
            leafFiles.append(file.name)

    return leafFiles

"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    # Count the number of files in each category
    categoriesToCountMap = {}
    for file in files:
        for category in file.categories:
            if category in categoriesToCountMap:
                categoriesToCountMap[category] += 1
            else:
                categoriesToCountMap[category] = 0

    # Sort the categories descending by count, then ascending alphabetically, and store the sorted keys
    sortedCategories = sorted(
        categoriesToCountMap,
        key = lambda x: (-categoriesToCountMap[x], x)
    )

    # Retrieve the top k categories
    result = sortedCategories[:k]

    return result


"""
Task 3
"""
NO_PARENT = -1

# FileWithChildren is a subclass of File, with an additional field to store the IDs of its children
@dataclass
class FileWithChildren(File):
    def __init__(self, file):
        super().__init__(file.id, file.name, file.categories, file.parent, file.size)
        self.childIDs: list[int] = []

    def addChildID(self, childID):
        self.childIDs.append(childID)

    def getChildIDs(self):
        return self.childIDs
    
def largestFileSize(files: list[File]) -> int:
    filesWithChildren = getAllFilesWithChildIDs(files)
    maxSize = 0

    # Find the size of each file and its children, and keep track of the largest size
    for file in filesWithChildren:
        size = getFileSize(file, filesWithChildren)
        if size > maxSize:
            maxSize = size

    return maxSize

# Function to construct a tree of files and their children
def getAllFilesWithChildIDs(files: list[File]) -> list[FileWithChildren]:
    # Convert File objects to FileWithChildren objects
    filesWithChildren = [FileWithChildren(file) for file in files]

    for file in files:    
        if file.parent != -1:
            for index, f in enumerate(filesWithChildren):
                if f.id == file.parent:
                    filesWithChildren[index].addChildID(file.id)
                    break

    return filesWithChildren

# Recursive function to find the total size of a file and all its children (and grandchildren etc.)
def getFileSize(file: FileWithChildren, files: list[FileWithChildren]) -> int:
    fileSize = file.size
    childIDs = file.getChildIDs()

    for childID in childIDs:
        # Find the File object of the child given the childID and add its size
        for f in files:
            if f.id == childID:
                # Find the size of the child's children and add it to the total size
                fileSize += getFileSize(f, files)
                
    return fileSize

if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]


    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
