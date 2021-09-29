#include <stdio.h>
int main()
{
    int fact = 1, i, num;
    printf("Enter a numnber:");
    scanf("%d", &num);
    if (num <= 0)
    {
        printf("The factorial of the number is 1\n");
    }
    else
    {
        for (i = num; i >= 1; i--)
        {
            fact *= i;
        }
        printf("The factorial of the number is: %d\n", fact);
    }
}