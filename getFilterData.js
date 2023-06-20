
const logs = [
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Clients",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Clients",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Clients",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Clients",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Clients",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Clients",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Clients",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Clients",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Clients",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Clients",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Clients",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Clients",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Clients",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Clients",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Contract Termination",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Contract Termination",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Contract Termination",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Clients",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Appointment Scheduling",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Blood Test Orders",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
    {
        "uuid": "b7e7af6c-2a5e-4d6f-8d0a-3f28a6d1a3b9",
        "record_accessed_at": 1686923595584,
        "module": "Contract Termination",
        "record": "https://example.com/records/1222",
        "recordNameFIeldApiName": "Jack Pearson",
        "user": "Jon Doe - jon@example.co.uk"
    },
    {
        "uuid": "d27a1e45-62e4-417d-8f22-582e3ddfa645",
        "record_accessed_at": 1679588948000,
        "module": "Contract Termination",
        "record": "https://example.com/records/123",
        "recordNameFIeldApiName": "Alan Shaerer",
        "user": "Alice Smith - alice@example.com"
    },
    {
        "uuid": "f0d8e8ba-5e1b-4a99-a2e4-ae2b93249212",
        "record_accessed_at": 1679449423000,
        "module": "Contract Termination",
        "record": "https://example.com/records/456",
        "recordNameFIeldApiName": "Dino Sched",
        "user": "Bob Johnson - bob@example.com"
    },
    {
        "uuid": "e1a9d8c3-8b7f-4fd1-9019-7d38f4bc85c0",
        "record_accessed_at": 1679818375000,
        "module": "Contract Termination",
        "record": "https://example.com/records/789",
        "recordNameFIeldApiName": "Indonisiana",
        "user": "Sarah Thompson - sarah@example.com"
    },
    {
        "uuid": "c2e4d9a7-3b8f-4d2b-9f53-153e6cd9e7a8",
        "record_accessed_at": 1679721976000,
        "module": "Contract Termination",
        "record": "https://example.com/records/012",
        "recordNameFIeldApiName": "Micheal Rodes",
        "user": "Michael Rodriguez - michael@example.com"
    },
];

const filterParams = {
    from: 168030360000,
    to: 16869528000000,
    moduleName: "Clients",
    userName: "Alice Smith"
}

// const filteredLogs = logs.filter(log => {
//     const accessedAt = new Date(log.record_accessed_at);
//     console.log(accessedAt, new Date(filterParams.from), new Date(filterParams.to), accessedAt >= new Date(filterParams.from))
//     return (
//         accessedAt >= new Date(filterParams.from) &&
//         accessedAt <= new Date(filterParams.to) &&
//         log.module === filterParams.moduleName &&
//         log.user.includes(filterParams.userName)
//     );
// });
// console.log(filteredLogs);

function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const randomizedArray = randomizeArray(logs);
console.log(randomizedArray);