/* Complementary DNA
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/ 

/* 
P: DNA - str, set letters; nothing "blank"
R: complementary DNA - str letters 
E: "ATTGC" -> "TAACG"
   "GTAT" -> "CATA" 
P: loop: through DNA str 
    conditional: if A -> T or C -> G or vice versa 
    return complementary DNA str 
*/ 

const DNAStrand = (dna) => {
    let compdna = ''
    for(let i=0; i<dna.length; i++){
        switch( dna[i] ){
            case 'A': 
                compdna+='T';
                break; 
            case 'T': 
                compdna+='A'; 
                break; 
            case 'G': 
                compdna+='C'; 
                break; 
            case 'C': 
                compdna+='G'
                break; 
        }
    }
    return compdna
}