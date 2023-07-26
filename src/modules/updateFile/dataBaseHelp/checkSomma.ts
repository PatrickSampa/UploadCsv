import { Readable } from 'stream';
import readline from 'readline';

export async function CheckSomma(csv: any): Promise<boolean>{
    const lines = csv.split('\n');

  // Verifica o cabeçalho
  const header = lines[0];
  if (!header.includes(',')) {
    return false
  }
  console.log(lines[1])
  // Verifica as linhas de dados
  for (let i = 1; i < lines.length; i++) {
    
    const line = lines[i];
    if (!line.includes(',')) {
      return false
    }
  }

  return true
}

