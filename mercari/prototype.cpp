#include <bits/stdc++.h>
using namespace std;

// class Mercari
// {
// public:
//     int original_price;
//     int sell_price;
//     int commission_fee = sell_price * 0.1;
//     int shipping_fee = 195;
//     int profit = sell_price - (original_price + commission_fee + shipping_fee);
//     void ask_and_input_original();
//     void ask_and_input_sell();
//     void print_profit();
// };

// void Mercari::ask_and_input_original()
// {
//     cout << "How much did you pay for this item?: ";
//     cin >> original_price;
// }

// void Mercari::ask_and_input_sell()
// {
//     cout << "On how much price do you want to sell this item?: ";
//     cin >> sell_price;
// }

// void Mercari::print_profit()
// {
//     printf("Your profit will be: %d yen.\n", profit);
// }

int main(void)
{
    // Mercari nut;
    // nut.ask_and_input_original();
    // nut.ask_and_input_sell();
    // nut.print_profit();
    int original_price;
    cout << "How much did you pay for this item?: ";
    cin >> original_price;

    int sell_price;
    cout << "On how much price do you want to sell this item?: ";
    cin >> sell_price;

    int commission_fee;
    commission_fee = sell_price * 0.1;

    int shipping_fee;
    shipping_fee = 195;

    int profit;
    profit = sell_price - (original_price + commission_fee + shipping_fee);

    printf("Your profit will be: %d yen.\n", profit);
    return 0;
}