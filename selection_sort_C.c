/* Make a function that receives an array as a parameter and sorts it
This example is using Selection sort */
#include <stdio.h>
#include <limits.h>

int *sorting_array(int unsorted_array[], int length){
  int idx, idx_2, min_idx = 0, aux = 0;
  // Do the algorithm from to beginning to the last.
  for (idx_2 = 0; idx_2 < length - 1; idx_2++) {
    /* Find the lesser element and switch it with the first element.
    by default, the first element is considered the minimum*/
    min_idx = idx_2;
    for (idx = idx_2 + 1; idx < length; idx++) {
      if (unsorted_array[idx] < unsorted_array[min_idx])
        min_idx = idx;
    }
    aux = unsorted_array[idx_2];
    unsorted_array[idx_2] = unsorted_array[min_idx];
    unsorted_array[min_idx] = aux;
  }
  return (unsorted_array);
}

int main(void){
  int array[] = {0, -99, 5, 4, 0, 10, 20, 1, 3, 7}, idx = 0;
  int length = sizeof(array) / sizeof(array[0]);
  int *sorted_array = sorting_array(array, length);
  printf("Sorted array = {");
  for (idx; idx < length - 1; idx++) {
    printf("%i, ", sorted_array[idx]);
  }
  printf("%i}\n", sorted_array[idx]);
  return (0);
}