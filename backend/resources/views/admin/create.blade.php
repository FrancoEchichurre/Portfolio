@extends('layout')

@section('content')
    <h1>Create Project</h1>

    <form action="{{ route('admin.projects.store') }}" method="POST">
        @csrf

        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" name="title" required>
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
        </div>

        <div class="mb-3">
            <label for="image_url" class="form-label">Image URL</label>
            <input type="url" class="form-control" id="image_url" name="image_url">
        </div>

        <div class="mb-3">
            <label for="link" class="form-label">Project Link</label>
            <input type="url" class="form-control" id="link" name="link">
        </div>

        <div class="mb-3">
            <label for="technologies" class="form-label">Technologies (JSON or Comma separated)</label>
            <input type="text" class="form-control" id="technologies" name="technologies" required
                placeholder='e.g. ["Laravel", "Vue"] or Laravel, Vue'>
        </div>

        <button type="submit" class="btn btn-primary">Create Project</button>
        <a href="{{ route('admin.projects.index') }}" class="btn btn-secondary">Cancel</a>
    </form>
@endsection