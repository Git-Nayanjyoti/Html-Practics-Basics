#include <stdio.h>
int main()
{
    int num, i, range = 1000;
    if (range >= 2)
    {
        printf("The prime numbers between 1 and 1000 are:\n2\n");
    }
    for (num = 1; num <= range; num++)
    {
        i = 2;
        while (i <= num - 1)
        {
            if (num % i == 0)
            {
                break;
            }
            else if (i == num - 1)
            {
                printf("%d\n", num);
                break;
            }
            i++;
        }
    }    
}