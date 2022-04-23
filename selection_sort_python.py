'''Make a function that receives an array as a parameter and sorts it
This example is using Selection sort'''

def selection_sort(unsorted_array):
  '''
  Parameters:
    unsorted_array: array to be sorted
  Return:
    sorted array
  1. Declare minimum element as the first element of the array,
  and the sorted_array
  '''
  array_length = len(unsorted_array)
  print(unsorted_array)
  for idx in range(array_length):
    idx_min = idx
    for idx_2 in range(idx + 1, array_length):
      if unsorted_array[idx_2] < unsorted_array[idx_min]:
        idx_min = idx_2
    unsorted_array[idx], unsorted_array[idx_min] = \
    unsorted_array[idx_min], unsorted_array[idx]
  print(unsorted_array)
  
selection_sort([3, 0, 0, 1, 51, -9, 152, 2])

  # array_length = len(unsorted_array)
  # for idx in range(0, array_length):
  #   min_number = unsorted_array[idx]
  #   for idx_2 in range(idx + 1, array_length):
  #     if unsorted_array[idx_2] < min_number:
  #       min_number = unsorted_array[idx_2]
  #       idx_min = idx_2
  #       flag = 1
  #   if flag == 1:
  #     unsorted_array[idx], unsorted_array[idx_min] = \
  #     unsorted_array[idx_min], unsorted_array[idx]
  #     flag = 0
  # print(unsorted_array)
  
  
