# Given a list of numbers, print them and their number of occurrences

def countOcurrences(numbers: list):
    summary = {}
    for number in numbers:
        if number not in summary.keys():
            summary[number] = 1
        else:
            summary[number] += 1
    for entry in summary.items():
        print(f"The number {entry[0]} appears {entry[1]} times")
    
countOcurrences([1, 1, 3, 2, 1, 1])