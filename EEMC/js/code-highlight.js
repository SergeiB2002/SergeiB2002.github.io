// Простое решение с highlight.js
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация highlight.js
    hljs.highlightAll();
    
    // Дополнительная настройка для блоков кода
    document.querySelectorAll('pre code').forEach((block) => {
        // Добавляем классы для лучшего отображения
        block.classList.add('hljs');
    });
});

// // Простой скрипт для базовой подсветки синтаксиса Go
// document.addEventListener('DOMContentLoaded', function() {
//     function highlightGoCode() {
//         const codeBlocks = document.querySelectorAll('code.language-go');
        
//         codeBlocks.forEach(block => {
//             let code = block.innerHTML;
            
//             // Ключевые слова Go
//             const keywords = [
//                 'package', 'import', 'func', 'var', 'const', 'type', 'struct',
//                 'interface', 'map', 'chan', 'go', 'select', 'defer', 'return',
//                 'if', 'else', 'for', 'range', 'switch', 'case', 'default',
//                 'break', 'continue', 'fallthrough', 'goto'
//             ];
            
//             // Типы
//             const types = [
//                 'string', 'int', 'int8', 'int16', 'int32', 'int64',
//                 'uint', 'uint8', 'uint16', 'uint32', 'uint64', 'uintptr',
//                 'float32', 'float64', 'complex64', 'complex128',
//                 'byte', 'rune', 'bool', 'error'
//             ];
            
//             // Функции
//             const functions = [
//                 'make', 'len', 'cap', 'new', 'append', 'copy', 'close',
//                 'delete', 'panic', 'recover', 'print', 'println'
//             ];
            
//             // Подсветка ключевых слов
//             keywords.forEach(keyword => {
//                 const regex = new RegExp(`\\b${keyword}\\b`, 'g');
//                 code = code.replace(regex, `<span class="keyword">${keyword}</span>`);
//             });
            
//             // Подсветка типов
//             types.forEach(type => {
//                 const regex = new RegExp(`\\b${type}\\b`, 'g');
//                 code = code.replace(regex, `<span class="type">${type}</span>`);
//             });
            
//             // Подсветка функций
//             functions.forEach(func => {
//                 const regex = new RegExp(`\\b${func}\\b`, 'g');
//                 code = code.replace(regex, `<span class="function">${func}</span>`);
//             });
            
//             // Подсветка строк
//             code = code.replace(/"([^"\\]|\\.)*"/g, '<span class="string">$&</span>');
            
//             // Подсветка комментариев
//             code = code.replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
//             code = code.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
            
//             // Подсветка чисел
//             code = code.replace(/\b(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?\b/g, '<span class="number">$&</span>');
            
//             block.innerHTML = code;
//         });
//     }
    
//     highlightGoCode();
// });