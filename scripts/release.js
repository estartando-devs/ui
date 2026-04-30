const readline = require('node:readline/promises');
const { execSync } = require('node:child_process');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log('🚀 --- Assistente de Publicação (@estartando/ui) --- 🚀\n');

  try {
    // 1. Check current version
    const currentVersion = require('../packages/ui/package.json').version;
    console.log(`📦 Versão atual: v${currentVersion}\n`);

    // 2. Ask for bump type
    const bumpType = await rl.question('Qual tipo de atualização você está fazendo? (patch / minor / major): ');
    
    if (!['patch', 'minor', 'major'].includes(bumpType.trim().toLowerCase())) {
      console.log('❌ Tipo inválido. Operação cancelada. Use: patch, minor ou major.');
      process.exit(1);
    }

    // 3. Confirm
    const confirm = await rl.question(`\n⚠️ Você escolheu '${bumpType}'. Confirmar o bump de versão e publicação no NPM? (s/N): `);
    
    if (confirm.trim().toLowerCase() !== 's') {
      console.log('❌ Operação cancelada.');
      process.exit(0);
    }

    console.log('\n⏳ Atualizando versão do pacote...');
    execSync(`npm version ${bumpType} --no-workspaces`, { stdio: 'inherit', cwd: './packages/ui' });
    
    console.log('\n⏳ Publicando no NPM (public)...');
    execSync(`npm publish --access public`, { stdio: 'inherit', cwd: './packages/ui' });

    console.log('\n✅ Publicação concluída com sucesso!');
    console.log('Não se esqueça de commitar as alterações (o package.json foi atualizado) e enviar para o GitHub!');

  } catch (error) {
    console.error('\n❌ Ocorreu um erro durante o processo de publicação:', error.message);
  } finally {
    rl.close();
  }
}

main();
