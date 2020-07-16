const fs = require('fs');
// fs.readFile('./arq1.txt', (error, resp) => {
//     if (error) {
//         console.log("Deu ruim", error.stack);
//         return;
//     }

//     console.log(resp.toString());
// })

fs.readFile('./arq1.txt', (errorArq1, respArq1) => {
    if (errorArq1) {
        console.log("Deu ruim", errorArq1.stack);
        return;
    }

    fs.readFile('./arq2.txt', (errorArq2, respArq2) => {
        if (errorArq2) {
            console.log("Deu ruim", errorArq2.stack);
            return;
        }
    
        fs.readFile('./arq3.txt', (errorArq3, respArq3) => {
            if (errorArq3) {
                console.log("Deu ruim", errorArq3.stack);
                return;
            }
            
            const resultado = `${respArq1} \n ${respArq2} \n ${respArq3}`
            // console.log(respArq1.toString());
            // console.log(respArq2.toString());
            // console.log(respArq3.toString());

            fs.writeFile('./final.txt', resultado, (error, resp) => {
                if (error) {
                    console.error(error);
                }
                console.log("Arquivo salvo sucesso!!!");
            })
        })
    })
})
