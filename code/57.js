// 接雨水的双指针解法之所以能够求解是因为，雨水的‘接’之和最低的一边有关
// 虽然‘左’、‘右’指针相差甚远，但是大的一方能够保证雨水能够被正确接到，而不会泄露
// 因此只需要考虑最低的一方