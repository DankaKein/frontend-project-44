install: 
	npm ci

brain-games: 
	node bin/brain-games.js

publish: 
	npm publish --dry-run

make lint:
	npx eslint .M
	
brain-even:
	node bin/brain-even.js