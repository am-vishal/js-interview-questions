// a << b = a · 2b
// a >> b = a / 2b = a · 2-b

// So to calculate 4 << 5, you need to double 4 five times: 4 · 25 = 4 · 32 = 128. Similarly for 3 >> 3.

// I will give you a simple explanation: 2 in binary is 0010. When you left shift twice on 2, we get 1000, which results in 8(decimal)

// Similarly 4 in binary is 0100 When you left shift it 5 times , we get 10000000,

// On the other hand, 3 in binary is 0011, when we right shift thrice on 3 it gives us 0000, hence it results in 0(decimal).

// If you don't know to convert binary to decimal or vice versa, try google.

// AND - OR:

// in AND, 0&0 = 0, 1&0 = 0, 0&1 = 0, 1&1 = 1

// in OR, 0|0 = 0, 1|0 = 1, 0|1 = 1, 1|1 = 1

// So 3&4 will be, 0011 & 0100 = 0000

// 3|3 will be, 0011 | 0011 = 0011

// 4 = 0100 4<<5 = 010000000 =1*2^7 = 128

// 3 = 011 3>>3 = 000 = 0
