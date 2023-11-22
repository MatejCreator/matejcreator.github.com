#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>
#include <time.h>

void screen_clean();
void screen_clean()
{
    printf("\033[2J\033[1;1H");

}

int main() 
{
    int user;
    printf("before");
    scanf("%d", &user);

    screen_clean();

    printf("after");
}