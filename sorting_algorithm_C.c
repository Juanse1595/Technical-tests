/* Make a function that receives an array as a parameter and sorts it */
#include <stdio.h>
#include <limits.h>

int *sorting_array(int unsorted_array[], int length){
  int idx, idx_2, flag = 0, lesser = unsorted_array[0], lesser_idx = 0, aux = 0;
  // Do the algorithm from to beginning to the second to last.
  for (idx_2 = 0; idx_2 < length - 1; idx_2++) {
    // Find the lesser element and switch it with the first element.
    lesser = unsorted_array[idx_2];
    for (idx = idx_2 + 1; idx < length; idx++) {
      if (unsorted_array[idx] < lesser) {
        lesser = unsorted_array[idx];
        lesser_idx = idx;
        flag = 1;
      }
    }
    if ( flag == 1) {
    aux = unsorted_array[idx_2];
    unsorted_array[idx_2] = lesser;
    unsorted_array[lesser_idx] = aux;
    flag = 0;
    }
  }
  return (unsorted_array);
}

int main(void){
  int array[] = {5, 4, 0, 10, 20, 1, 3, 7}, idx = 0;
  int length = sizeof(array) / sizeof(array[0]);
  int *sorted_array = sorting_array(array, length);
  printf("Sorted array = {");
  for (idx; idx < length - 1; idx++) {
    printf("%i, ", sorted_array[idx]);
  }
  printf("%i}\n", sorted_array[idx]);
  return (0);
}