export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const output = mathFunction();
    queue.push(output);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
