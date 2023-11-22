#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>
#include <time.h>

void welcome_page();
void game_start();
void exit_page();
void screen_clean();

void screen_clean()
{
    printf("\033[2J\033[1;1H");
    //system("cls")
}

void welcome_page()
{
    printf("----------------------------------------------------------------------------------\n");
    printf("------------------------------Created by Matej Palco------------------------------\n");
    printf("----------------------------------------------------------------------------------\n");
    printf("\n");
    printf("        ____  _     __             __         __        _     _\n");
    printf("       / __ \\| |___|  |__  ___ __ _\\ \\       / /_  _ __| | __| |\n");
    printf("      | |  | |   __|  _  \\/ _ \\  '__\\ \\  _  / /_ \\| '__| |/ _  |\n");
    printf("      | |__| |  |__| | | |   _/  |   \\ \\/ \\/ /(_) | |  | | (_| |\n");
    printf("       \\____/\\_____|_| |_|\\___|__|    \\_/\\__/\\___/|_|  |_|\\__,_|\n");
    printf("\n");
    printf("\n");
    int choice;
    printf("                                    1. Start                                      \n"); 
    printf("                                    2. Exit                                      \n");  
 
    scanf("%d", &choice);

    if (choice == 1)
    {
        game_start();
    }
    else if (choice == 2)
    {
        exit_page();
    }
}

void exit_page()
{
    screen_clean();
    printf("\tThank you for playing!\n");
    printf("\tFarewell fellow warrior!\n");

printf("             ,;~;,                                                \n");
printf("                 /\\_                                             \n");
printf("                 (  /                                             \n");
printf("                 (()      //)                                     \n");
printf("                 | \\  ,,;;'\\                                    \n");
printf("             __ _(  )m=(((((((((((((================--------      \n");
printf("           /'  ' '()/~' '.(, |                                    \n");
printf("        ,;(      )||     |  ~                                     \n");
printf("       ,;' \\    /-(.;,   )                                       \n");
printf("            ) /       ) /                                         \n");
printf("           //         ||                                          \n");
printf("          )_\\         )_\\                                       \n");

    
    exit(0);
}

void game_start()
{
    screen_clean();
    printf("\t Choose a class\n\n\n");
    printf("1. Knight\n");
    printf(" /\\ \n");
    printf(" || \n");
    printf(" || \n");
    printf(" || \n");
    printf(" ||           {} \n");
    printf(" ||          .--. \n");
    printf(" ||         /.--.\\ \n");
    printf(" ||         |====| \n");
    printf(" ||         |`::`| \n");
    printf("_||_    .-;`\\..../`;_.-^-._ \n");
    printf(" /\\   /  |...::..|`   :   `| \n");
    printf(" |:'\\ |   /'''::''|   .:.   | \n");
    printf("  \\ /\\;-,/\\   ::  |..:::::..| \n");
    printf("   \\ <` >  >._::_.| ':::::' | \n");
    printf("    `""`  /   ^^  |   ':'   | \n");
    printf("          |       \\    :    / \n");
    printf("          |        \\   :   /  \n");
    printf("          |___/\\___|`-.:.-` \n");
    printf("           \\_ || _/    ` \n");
    printf("           <_ >< _> \n");
    printf("            |  ||  | \n");
    printf("            |  ||  | \n");
    printf("           _\\.:||:./_ \n");
    printf("          /____/\\____\\ \n\n\n");

    printf("2. Mage");
    printf("                . \n");
    printf("\n");
    printf("                        . \n");
    printf("              /^\\     . \n");
    printf("         /\\    V \n");
    printf("        /__\\   I      O  o \n");
    printf("       //..\\\\  I     . \n");
    printf("       \\].`[/  I             \n");
    printf("       /l\\/j\\  (]    .  O \n");
    printf("      /. ~~ ,\\/I          . \n");
    printf("      \\L__j^\\/ I       o \n");
    printf("       \\/--v}  I     o   . \n");
    printf("       |    |  I   _________ \n");
    printf("       |    |  I c(`       ')o \n");
    printf("       |    l  I   \\.     ,/ \n");
    printf("     _/j  L l\\_!  _//^---^\\_ \n");
    printf("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n\n\n");

    printf("3. Rogue");        
}

int main()
{
    welcome_page();

    return 0;
}