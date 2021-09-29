#include<stdio.h>
int main(){
    int x = 5;
    while (x == 1)
    {
        x = x-1;
        printf("no 1  %d\n",x);
    }
    int a,b =10;
    a= -b--;
    printf("no 2 a = %d, b = %d\n ",a, ++b);

    printf("no 3 %c\n",65);
    printf("no 3 %d\n",65);

    for(int k = 0; k<10; k++){
        if(k%2 ==1){
        
            printf(" no 4 %d\n", k);
            continue;
        }
    }

    int j =5;
    while(j>=1){
        printf("\n no 5 %d", j);
        j = j-1;
    }

    

}