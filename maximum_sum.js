<script>
// javascript program to construct a Maximum Sum Linked List out of
// two Sorted Linked Lists having some Common nodes
var head; // head of list

	/* Linked list Node */
	class Node {
			constructor(val) {
				this.data = val;
				this.next = null;
			}
		}

	// Method to adjust pointers and print final list
	function finalMaxSumList(a, b) {
	var result = null;

		/*
		* assigning pre and cur to head of the linked list
		*/
		var pre1 = a, curr1 = a;
		var pre2 = b, curr2 = b;

		/*
		* Till either of current pointers is not null execute the loop
		*/
		while (curr1 != null || curr2 != null)
		{
		
			// Keeping 2 local variables at the start of every
			// loop run to keep track of the sum between pre
			// and cur reference elements.
			var sum1 = 0, sum2 = 0;

			// Calculating sum by traversing the nodes of linked
			// list as the merging of two linked list. The loop
			// stops at a common node
			while (curr1 != null && curr2 != null && curr1.data != curr2.data) {

				if (curr1.data < curr2.data) {
					sum1 += curr1.data;
					curr1 = curr1.next;
				} else {
					sum2 += curr2.data;
					curr2 = curr2.next;
				}
			}

			// If either of current pointers becomes null
			// carry on the sum calculation for other one.
			if (curr1 == null) {
				while (curr2 != null) {
					sum2 += curr2.data;
					curr2 = curr2.next;
				}
			}
			if (curr2 == null) {
				while (curr1 != null) {
					sum1 += curr1.data;
					curr1 = curr1.next;
				}
			}

			// First time adjustment of resultant head based on
			// the maximum sum.
			if (pre1 == a && pre2 == b)
				result = (sum1 > sum2) ? pre1 : pre2;

			// If pre1 and pre2 don't contain the head references of
			// lists adjust the next pointers of previous pointers.
			else {
				if (sum1 > sum2)
					pre2.next = pre1.next;
				else
					pre1.next = pre2.next;
			}

			// Adjusting previous pointers
			pre1 = curr1;
			pre2 = curr2;

			// If curr1 is not NULL move to the next.
			if (curr1 != null)
				curr1 = curr1.next;

			// If curr2 is not NULL move to the next.
			if (curr2 != null)
				curr2 = curr2.next;
		}

		while (result != null) {
			document.write(result.data + " ");
			result = result.next;
		}
		document.write();
	}

	/* Inserts a node at start of linked list */
	function push(headl, new_data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
		var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = headl;

		/* 4. Move the head to point to new Node */
		headl = new_node;
		return headl;
	}

	/* Driver program to test above functions */
	

		// Linked List 1 : 1->3->30->90->110->120->NULL
		// Linked List 2 : 0->3->12->32->90->100->120->130->NULL
		var llist1 = null; var llist2 = null;
		llist1 = push(llist1,120);
		llist1=push(llist1,110);
		llist1=push(llist1,90);
		llist1=push(llist1,30);
		llist1=push(llist1,3);
		llist1=push(llist1,1);

		llist2=push(llist2,130);
		llist2=push(llist2,120);
		llist2=push(llist2,100);
		llist2=push(llist2,90);
		llist2=push(llist2,32);
		llist2=push(llist2,12);
		llist2=push(llist2,3);
		llist2=push(llist2,0);

		finalMaxSumList(llist1, llist2);


</script>
