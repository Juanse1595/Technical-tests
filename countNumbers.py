# Given a list of numbers, print them and their number of occurrences
from typing import List, Dict

def countOcurrences(numbers: List[int]):
    '''
    This function receives a list of numbers and print a summary of how
    many times the number is in that list
    
    @numbers: list of numbers to analyze
    
    A "summary" dictionary is created to have each number and the number of times
    it appears
    '''
    summary = {}
    for number in numbers:
        if number not in summary.keys():
            summary[number] = 1
        else:
            summary[number] += 1
    for entry in summary.items():
        print(f"The number {entry[0]} appears {entry[1]} times")
        
def countOcurrences2(numbers: List[int]):
    '''
    This function receives a list of numbers and print a summary of how
    many times the number is in that list
    
    @numbers: list of numbers to analyze
    
    A "setNumbers" set is created to have the unique numbers of the list
    '''
    setNumbers = set(numbers)
    for num in setNumbers:
        print(f"The number {num} appears {numbers.count(num)} times")
    
countOcurrences2([1, 1, 3, 2, 1, 1])