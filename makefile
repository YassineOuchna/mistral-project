# Run front & back
run:
	make -C backend run & make -C frontend run

# Install dependencies
install:
	make -C backend install
	make -C frontend install

# Clean both environments
clean:
	make -C backend clean
	make -C frontend clean

.PHONY: install run clean
