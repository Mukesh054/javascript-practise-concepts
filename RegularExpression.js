/**
 * Regular expression patterns are as follows
 * 
 * 
 * QUANTIFIERS
 * /^a...s$/ ==> any five letter string starting with a and ending with s
 * [] => [abc] ==> If string matches any of the character from a,b,c
 * [a-e] ==> is the same as [abcde]
 * [^abc] ==> means any character except a,b,c
 * . => dot ==> A period matches any single character (except newline '\n')
 * ^  => ^a ==> is used to check if a string starts with a certain character
 * $ => a$ ==> is used to check if a string ends with a certain character.
 * * => ma*n ==> matches zero or more occurrences of the pattern left to it
 * + => ma+n ==> matches one or more occurrences of the pattern left to it
 * ? => ma?n ==> matches zero or one occurrence of the pattern left to it
 * {} => a{2,3} ==> This means at least n, and at most m repetitions of the pattern left to it
 * | => a|b ==> is used for alternation (or operator)
 * () => (a|b|c)xz ==> match any string that matches either a or b or c followed by xz
 * \ ==> is used to escape various characters including all metacharacters
 * 
 * SPECIAL SEQUENCES (META CHARACTERS)
 * \A => \Athe ==> Matches if the specified characters are at the start of a string
 * \b => \bfoo ==> Matches if the specified characters are at the beginning or end of a word
 * \B => \Bfoo ==> Opposite of \b. Matches if the specified characters are not at the beginning or end of a word
 * \d ==> Matches any decimal digit. Equivalent to [0-9]
 * \D ==> Matches any non-decimal digit. Equivalent to [^0-9]
 * \s ==> Matches where a string contains any whitespace character. Equivalent to [ \t\n\r\f\v]
 * \S ==> Matches where a string contains any non-whitespace character. Equivalent to [^ \t\n\r\f\v]
 * \w ==> Matches any alphanumeric character (digits and alphabets). Equivalent to [a-zA-Z0-9_]
 * \W ==> Matches any non-alphanumeric character. Equivalent to [^a-zA-Z0-9_]
 * \Z ==> Matches if the specified characters are at the end of a string
 */