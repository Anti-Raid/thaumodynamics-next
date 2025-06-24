import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./docs-cache/docs/api-reference/openapi.json'],
  output: './docs-cache/docs/api-reference/generated',
  per: 'operation',
  includeDescription: true,
  groupBy: 'tag',
});
