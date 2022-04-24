/* Make a function that receives an array as a parameter and sorts it
This example is using Bubble sort */
#include <stdio.h>

int *bubble_sort(int *array, int n){
  int idx, idx_2, aux;
  for(idx = 0; idx < n; idx++){
    for(idx_2 = 0; idx_2 < n - idx - 1; idx_2++){
      if(array[idx_2] > array[idx_2 + 1]){
        aux = array[idx_2];
        array[idx_2] = array[idx_2 + 1];
        array[idx_2 + 1] = aux;
      }
    }
  }
  return (array);
}

int main(void) {
  int i;
  int array[] = {4, 5, -9, 2, 4, -1, 100, -5, 0, 0, 0, 56};
  int n = sizeof(array) / sizeof(array[0]);
  bubble_sort(array, n);
  printf("{");
  for(i = 0; i < n - 1; i++) {
    printf("%i, ", array[i]);
  }
  printf("%i}\n", array[i]);
}